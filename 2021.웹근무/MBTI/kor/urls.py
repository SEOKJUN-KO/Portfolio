from django.urls import path
from .views import index, test, category, category_detail ,contact

app_name = "kor"

urlpatterns = [
    path('index/', index, name="index"),
    path('test/', test, name="test"),
    path('category/', category, name="category"),
    path('detail/',category_detail, name="category_detail"),
    path('contact/', contact, name="contact"),
]