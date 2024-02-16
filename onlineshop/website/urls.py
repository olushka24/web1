from django.urls import path
from .views import ProductList, ProductDetail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('product/<int:pk>/', ProductDetail.as_view()),
]