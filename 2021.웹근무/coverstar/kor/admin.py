from django.contrib import admin
from .models import Application


@admin.register(Application)
class AppAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'mail',
        'call',
        'location',
        'genre',
        'instrument',
        'job',
        'title',
        'singer',
        'link',
        'words',
        'create_date',
    )
