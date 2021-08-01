from django.urls import path
from .views import start, index, done, success

app_name = "kor"

urlpatterns = [
    path('start/', start, name="start"),
    path('index/', index, name="index"),
    path('done/', done, name="done"),
    path('sucess/', success, name="success"),
]