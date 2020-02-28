from django.views.generic import TemplateView
from rest_framework import generics
from django.shortcuts import render


# Create your views here.


class MainPageViews(TemplateView):
    template_name = 'frontend/index.html'
