from django.urls import include, path
from .views import MainPageViews

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('about/', MainPageViews.as_view())
]
