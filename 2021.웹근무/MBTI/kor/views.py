from django.shortcuts import render


def index(request):
    return render(request, "kor/index.html")


def test(request):
    return render(request, "kor/test.html")


def category(request):
    return render(request, "kor/category.html")


def category_detail(request):
    return render(request, "kor/category-detail.html")


def contact(request):
    return render(request, "kor/contact.html")
