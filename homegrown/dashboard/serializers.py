from rest_framework import serializers
from dashboard.models import Sensor,Machines, Config , MachineState

#Lead Serializer
class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = "__all__"

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machines
        fields = "__all__"


class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = "__all__"

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineState
        fields = "__all__"