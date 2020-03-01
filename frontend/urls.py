from django.urls import include, path
from .views import MainPageViews

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('about/', MainPageViews.as_view()),
    path('category/', MainPageViews.as_view()),
    path('tags/', MainPageViews.as_view()),
    path('', MainPageViews.as_view())
]
