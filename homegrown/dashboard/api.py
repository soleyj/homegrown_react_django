from dashboard.models import Sensor, Machines, Config , MachineState
from rest_framework import viewsets, permissions,generics
from rest_framework.decorators import action, list_route
from rest_framework.response import Response
from .serializers import SensorSerializer,MachineSerializer,ConfigSerializer,StateSerializer


##Sensor viewset
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    
    serializer_class = SensorSerializer
    filter_fields = ('machine__id',)  

    @action(methods = ['get'],detail= False)
    def newest(self,request):
        username = self.request.query_params.get('id', None)
        newest = self.get_queryset().filter(machine__id=username).order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)



class StateViewSet(viewsets.ModelViewSet):
    queryset = MachineState.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = StateSerializer
    
    @action(methods = ['get'],detail= False)
    def newest(self,request):
        username = self.request.query_params.get('id', None)
        newest = self.get_queryset().filter(machine__id=username).order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)



class MachineViewSet(viewsets.ModelViewSet):
    
    permission_classes =[
        permissions.IsAuthenticated
    ]
    serializer_class = MachineSerializer

    def get_queryset(self):
        return self.request.user.machine.all()

        


class ConfigViewSet(viewsets.ModelViewSet):
    queryset = Config.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    
    serializer_class = ConfigSerializer
    filter_fields = ('machine__id',)  

    @action(methods = ['get'],detail= False)
    def newest(self,request):
        username = self.request.query_params.get('id', None)
        newest = self.get_queryset().filter(machine__id=username).order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)