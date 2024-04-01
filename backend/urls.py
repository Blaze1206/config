"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from warehouse import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/good/',views.goodHandler, name="good"),
    path('api/good/<int:pk>',views.specificGoodHandler),
    path('',views.main, name='index'),
    path('w_admin/',views.warehouse_admin, name='w_admin'),
    path('w_orders/',views.warehouse_orders, name='w_orders'),
    path('item/<int:pk>',views.item_view),
    path('api/orders/',views.orderHandler,name="order"),
    path('api/orders/<int:pk>',views.specificOrderHandler),
    path('order/<int:pk>',views.order_view),
    path('login/', views.login_page),
    path('logout/', views.logout_page, name="logout"),
    path('add_order/',views.add_order, name="add_order"),
    path('add_good/',views.add_good, name="add_good")
]
