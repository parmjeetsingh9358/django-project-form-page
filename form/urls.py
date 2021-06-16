from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('checkuser', views.checkuser, name='checkuser'),
    path('submit', views.submit, name='submit')
]
