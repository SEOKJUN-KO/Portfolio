from django.contrib import admin
from django.urls import path, include
from kor.views import start
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('kor/', include('kor.urls')),
    path('', start),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
