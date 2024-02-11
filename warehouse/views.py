from django.shortcuts import render
from .serializers import GoodSerializer,OrderSerializer
from .models import Good,Order
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

# Create your views here.

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
        good = Good(is_visible=is_visible,item_code=item_code,name=name,amount=amount,price_in=price_in,price_out=price_out)
        good.save()
        serialized=GoodSerializer(good, many=False)
        return Response(serialized.data)
    

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

        order = Order(is_visible=is_visible,item=item_id,name=name,address=address,e_mail=e_mail,phone=phone,amount=amount,price=price)
        order.save()
        serialized=OrderSerializer(order, many=False)
        return Response(serialized.data)
    
@csrf_exempt
@api_view(['PUT','DELETE'])
def specificOrderHandler(request,pk):
    try:
        order=Order.objects.get(id=pk)
    except:
        return Response({'message':'Order not found!'})
    if request.method == 'DELETE':
        order.is_visible=False
        order.save()
        return Response({'message':f'Order ID {pk} is removed successfully!'})

    if request.method == 'PUT':
        try:

            item=request.data['item']
            item_id=Good.objects.get(id=item)

            order.is_visible = request.data['is_visible']
            order.item = item_id
            order.name = request.data['name']
            order.address = request.data['address']
            order.e_mail = request.data['e_mail']
            order.phone = request.data['phone']
            order.amount = request.data['amount']
            order.price = request.data['price']
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