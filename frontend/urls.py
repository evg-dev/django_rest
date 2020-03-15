from django.conf.urls import url
from django.urls import include, path
from .views import MainPageViews

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('about/', MainPageViews.as_view()),
    path('category/', MainPageViews.as_view()),
    path('tag/', MainPageViews.as_view()),
    path('', MainPageViews.as_view()),
    path('category/<category__slug>/', MainPageViews.as_view()),
    path('tag/<tag__slug>/', MainPageViews.as_view()),
    path('<slug>/', MainPageViews.as_view()),
]
