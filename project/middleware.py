from inertia.middleware import InertiaMiddleware
from inertia import share
from django.conf import settings
from django.contrib.auth.models import User
from typing import Callable
from django.http import HttpRequest, HttpResponse

class InertiaShareMiddleware(InertiaMiddleware):
    def __init__(self, get_response: Callable):
        super().__init__(get_response)
    
    def __call__(self, request):
        share(
             request,
            app_name='settings.APP_NAME',
            # user_count=lambda: User.objects.count(),  # evaluated lazily at render time
            # user=lambda: request.user,  # evaluated lazily at render time
        )
        response = self.get_response(request)
        return response

