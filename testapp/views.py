from inertia import render


# Create your views here.

def test(request):
    return render(request, "testapp::Example", props={"inertia": True})

