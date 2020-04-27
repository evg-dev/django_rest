from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'tag', views.TagViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'post', views.PostViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url('^category/(?P<category__slug>.+)/$', views.PostByCategotyList.as_view()),
    url('^tag/(?P<tag__slug>.+)/$', views.PostByTagList.as_view()),
    path('', include(router.urls)),
]
