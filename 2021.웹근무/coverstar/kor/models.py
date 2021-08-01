from django.db import models


class Application(models.Model):

    name = models.CharField(max_length=200, default="")
    mail = models.CharField(max_length=200, default="")
    call = models.CharField(max_length=200, default="")
    location = models.CharField(max_length=200, default="")
    genre = models.CharField(max_length=200, default="")
    instrument = models.CharField(max_length=200, default="")
    job = models.CharField(max_length=200, default="")
    title = models.CharField(max_length=200, default="")
    singer = models.CharField(max_length=200, default="")
    link = models.CharField(max_length=200, default="")
    words = models.TextField(default="")
    create_date = models.DateTimeField(auto_now_add=True)