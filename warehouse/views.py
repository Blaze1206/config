from django.shortcuts import render, redirect
from .serializers import GoodSerializer,OrderSerializer
from .models import Good,Order
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout

# Create your views here.

@csrf_exempt
@api_view(['GET', 'POST'])
def goodHandler(request):
    if request.method == 'GET':
        goods = Good.objects
        serialized = GoodSerializer(goods, many = True)
        return Response(serialized.data)
    
    if request.method == 'POST':
        is_visible = request.data['is_visible']
        item_code = request.data['item_code']
        name = request.data['name']
        amount = request.data['amount']
        price_in = request.data['price_in']
        price_out = request.data['price_out']
        discount = request.data['discount']
        category = request.data['category']
        photo = request.data['photo']
        good = Good(is_visible=is_visible,item_code=item_code,name=name,amount=amount,price_in=price_in,price_out=price_out,discount=discount,category=category,photo=photo)
        good.save()
        serialized=GoodSerializer(good, many=False)
        return render(request,'item.html',{'item': serialized.data})
    

@csrf_exempt
@api_view(['PUT','DELETE'])
def specificGoodHandler(request,pk):
    try:
        good = Good.objects.get(id=pk)
    except:
        return Response({'message':'Good not found!'})
    
    if request.method == 'DELETE':
        good.is_visible=False
        good.save()
        return Response({'message':f'Good ID {pk} is removed successfully!'})
    
    if request.method=='PUT':
        try:
            good.is_visible = request.data['is_visible']
            good.item_code=request.data['item_code']
            good.name=request.data['name']
            good.amount=request.data['amount']
            good.price_in=request.data['price_in']
            good.price_out=request.data['price_out']
            good.save()
            serialized = GoodSerializer(good,many=False)
            return Response(serialized.data)
        except Exception as e:
            return Response({'error':repr(e)})

@api_view(['GET'])
def item_view(request,pk):
    try:
        good = Good.objects.get(id=pk)
    except:
        return Response({'message':f'Good ID {pk} is not exsist!'})
    
    serialized = GoodSerializer(good, many=False)

    return render(request,'item.html',{'item': serialized.data})

@csrf_exempt
@api_view(['GET','POST'])
def orderHandler(request):
    if request.method == 'GET':
        orders = Order.objects
        serialized=OrderSerializer(orders,many = True)
        return Response(serialized.data)
    
    if request.method == 'POST': 
        is_visible = request.data['is_visible']
        item = request.data['item']
        name = request.data['name']
        address = request.data['address']
        e_mail = request.data['e_mail']
        phone = request.data['phone']
        amount = request.data['amount']
        price = request.data['price']
        
        item_id=Good.objects.get(id=item)
        item_id.amount-=int(amount)
        item_id.save()

        order = Order(is_visible=is_visible,item=item_id,name=name,address=address,e_mail=e_mail,phone=phone,amount=amount,price=price)
        order.save()
        serialized=OrderSerializer(order, many=False)
        return render(request,'order.html',{'order':serialized.data})

    
@csrf_exempt
@api_view(['PUT','DELETE'])
def specificOrderHandler(request,pk):
    try:
        order=Order.objects.get(id=pk)
    except:
        return Response({'message':'Order not found!'})
    if request.method == 'DELETE':
        order.is_visible=False
        amount = order.amount
        order.amount=0
        item_id=Good.objects.get(id=order.item.pk)
        item_id.amount+=amount
        item_id.save()
        order.save()
        return Response({'message':f'Order ID {pk} is removed successfully!'})

    if request.method == 'PUT':
        try:

            item=request.data['item']
            item_id=Good.objects.get(id=item)
            order_original_amount=order.amount

            order.is_visible = request.data['is_visible']
            order.is_done = request.data['is_done']
            order.item = item_id
            order.name = request.data['name']
            order.address = request.data['address']
            order.e_mail = request.data['e_mail']
            order.phone = request.data['phone']
            order.amount = request.data['amount']
            order.price = request.data['price']
            amount=0
            if order_original_amount>order.amount:
                 amount=order_original_amount-order.amount
                 item_id.amount+=amount
            if order_original_amount<order.amount:
                 amount=order.amount-order_original_amount
                 item_id.amount-=amount
            
            item_id.save()
            order.save()
            serialized=OrderSerializer(order,many=False)
            return Response(serialized.data)
        except Exception as e:
            return Response({'error':repr(e)})
        
@api_view(['GET'])
def order_view(request,pk):
    try:
        order=Order.objects.get(id=pk)
    except:
        return Response({'message':f'Order ID {pk} is not exsist!'})
    serialized=OrderSerializer(order,many=False)
    return render(request,'order.html',{'order':serialized.data})

def main(request):
    return render(request, 'index.html')

@login_required(login_url='../login/')
def warehouse_admin(request):
    return render(request,'warehouse_admin.html')

@login_required(login_url='../login/')
def warehouse_orders(request):
    return render(request, 'warehouse_orders.html')

def login_page(request):
    if request.method == 'POST': 
        form = AuthenticationForm(data = request.POST)

        if form.is_valid():
            uname = form.cleaned_data.get('username')
            pword = form.cleaned_data.get('password')
            user = authenticate(request, username=uname, password=pword)
            if user is not None:
                login(request, user)
                return redirect('../w_admin')
        return render(request, 'login.html')
    
    else: 
        form = AuthenticationForm()
        return render(request, 'login.html', {'form':form})

def logout_page(request):
    logout(request)
    return redirect('index')

@login_required(login_url='../login/')
def add_order(request):
    goods = Good.objects.all()
    return render(request, 'add_order.html',{'goods':goods})

@login_required(login_url='../login/')
def add_good(request):
    choices = Good.CATEGORY_CHOICES
    return render(request,'add_good.html',{'choices':choices})