from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Good,Order


class GoodSerializer(ModelSerializer):
    

    class Meta:
        model = Good
        fields = ['id','is_visible','item_code','name','amount','price_in','price_out','category']


class OrderSerializer(ModelSerializer):
   
    
    class Meta:
        model = Order
        fields = ['id','is_visible','item','name','address','e_mail','phone','amount','price','date',]
        depth = 1