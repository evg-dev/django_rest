from collections import OrderedDict

from django.core.paginator import Paginator
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.utils.urls import replace_query_param, remove_query_param

from .serializers import TagSerializer, PostSerializer, CategorySerializer
from .models import Tag, Post, Category


class ApiPageNumber(PageNumberPagination):
    """
    Custom pagination class overriding methods get_next_link() and get_previous_link() which
    return pagination page_number instead url
    """

    # TODO: add to settings
    page_size = 1

    def get_next_link(self):
        if not self.page.has_next():
            return None
        page_number = self.page.next_page_number()
        return page_number

    def get_previous_link(self):
        if not self.page.has_previous():
            return None
        page_number = self.page.previous_page_number()
        return page_number


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    pagination_class = ApiPageNumber
    serializer_class = PostSerializer
    lookup_field = 'slug'


class PostViewSetPaginated(generics.ListAPIView):
    queryset = Post.objects.all()
    pagination_class = ApiPageNumber
    serializer_class = PostSerializer
    lookup_field = 'slug'


class PostByCategotyList(generics.ListAPIView):
    serializer_class = PostSerializer
    pagination_class = ApiPageNumber
    lookup_field = 'slug'

    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['category__slug'])


class PostByTagList(generics.ListAPIView):
    serializer_class = PostSerializer
    pagination_class = ApiPageNumber
    lookup_field = 'slug'

    def get_queryset(self):
        return Post.objects.filter(tag__slug=self.kwargs['tag__slug'])
