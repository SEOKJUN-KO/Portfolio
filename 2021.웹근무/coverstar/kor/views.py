from django.shortcuts import render
from .models import Application
from wsgiref.util import FileWrapper
from django.contrib import messages
from django.core.files.storage import FileSystemStorage
from django.core.mail import EmailMessage
from django.core.files.storage import FileSystemStorage
from django.template.loader import render_to_string


def index(request):
    return render(request, "kor/index.html")


def start(request):
    return render(request, 'kor/start.html')


def success(request):
    return render(request, 'kor/done.html')


def done(request):
    if request.method == "POST":
        name1 = request.POST.get("name1")
        mail = request.POST.get("mail")
        call = request.POST.get("call")
        location = request.POST.get("location")
        genre = request.POST.get("genre")
        instrument = request.POST.get("instrument")
        job = request.POST.get("job")
        title = request.POST.get("title")
        singer = request.POST.get("singer")
        link = request.POST.get("link")
        words = request.POST.get("words")

        if name1 == "" or mail == "" or call == "" or link == "":
            a = 0
        else:
            Application.objects.create(name=name1, mail=mail, call=call, location=location, genre=genre, instrument=instrument,
                                       job=job, title=title, singer=singer, link=link, words=words)
            emailContent = render_to_string('kor/create.html', {
                "name1": name1,
                "mail": mail,
                "call": call,
                "location": location,
                "genre": genre,
                "instrument": instrument,
                "job": job,
                "title": title,
                "singer": singer,
                "link": link,
                "words": words
            })
            e = EmailMessage('커버스타 신청서입니다.', emailContent, to=['coverstar2021@gmail.com'])
            e.content_subtype = "html"
            e.send()
            return render(request, 'kor/done.html')
        return render(request, 'kor/done.html')
    return render(request, 'kor/index.html')

