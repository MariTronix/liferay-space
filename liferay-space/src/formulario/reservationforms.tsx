import React, { useState } from "react";
import { Input } from "@/formulario/ui/input";
import { Label } from "@/formulario/ui/label";
import { Button } from "@/formulario/ui/button";
import { Checkbox } from "@/formulario/ui/checkbox";
import { Textarea } from "@/formulario/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/formulario/ui/select";
import { useToast } from "@/hooks/use-toast";

export const ReservationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    responsibleName: "",
    institutionName: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
    participants: "",
    spaces: {
      auditorium180: false,
      auditorium150: false,
      auditorium120: false,
      auditorium100: false,
      auditorium80: false,
    },
    alternativeSpace: "",
    eventDescription: "",
    termsAgreed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "termsAgreed") {
      setFormData((prev) => ({
        ...prev,
        termsAgreed: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        spaces: {
          ...prev.spaces,
          [name]: checked,
        },
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      alternativeSpace: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.responsibleName || !formData.email || !formData.date || !formData.termsAgreed) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Form submission logic would go here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Solicitação enviada",
      description: "Sua solicitação de reserva foi enviada com sucesso!",
    });

    // Reset form (optionally)
    // setFormData({ ... });
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-16">
      <div className="text-center mb-8 mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Solicite sua reserva</h1>
        <p className="text-gray-500 text-sm">Preencha o formulário abaixo para solicitar sua reserva.</p>
      </div>

      <div className="bg-formBlue p-4 rounded-t-md">
        <h2 className="text-white text-xl font-medium">Formulário de solicitação</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-b-md shadow-md p-6 space-y-6">
        <section>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Informações para contato</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="responsibleName">Nome do responsável *</Label>
              <Input 
                id="responsibleName" 
                name="responsibleName"
                value={formData.responsibleName}
                onChange={handleInputChange}
                placeholder="Digite o nome completo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="institutionName">Nome da comunidade/instituição</Label>
              <Input 
                id="institutionName" 
                name="institutionName"
                value={formData.institutionName}
                onChange={handleInputChange}
                placeholder="Digite o nome da instituição"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite seu email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Detalhes do evento</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="date">Data *</Label>
              <Input 
                id="date" 
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startTime">Horário do início</Label>
              <Input 
                id="startTime" 
                name="startTime"
                type="time"
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endTime">Horário do término</Label>
              <Input 
                id="endTime" 
                name="endTime"
                type="time"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="eventDescription">Descrição do evento</Label>
            <Textarea 
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleInputChange}
              placeholder="Descreva o evento em detalhes..."
              className="mt-1 min-h-[120px]"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="participants">Número estimado de participantes</Label>
            <Input 
              id="participants" 
              name="participants"
              type="number"
              value={formData.participants}
              onChange={handleInputChange}
              placeholder="Digite o número de participantes"
              className="mt-1"
            />
          </div>

          <div className="space-y-4 mb-6">
            <Label>Seleção de espaços</Label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="auditorium180" 
                  checked={formData.spaces.auditorium180}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("auditorium180", checked === true)
                  }
                />
                <label 
                  htmlFor="auditorium180" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auditório (180 pessoas)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="auditorium150" 
                  checked={formData.spaces.auditorium150}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("auditorium150", checked === true)
                  }
                />
                <label 
                  htmlFor="auditorium150" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auditório (150 pessoas)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="auditorium120" 
                  checked={formData.spaces.auditorium120}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("auditorium120", checked === true)
                  }
                />
                <label 
                  htmlFor="auditorium120" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auditório (120 pessoas)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="auditorium100" 
                  checked={formData.spaces.auditorium100}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("auditorium100", checked === true)
                  }
                />
                <label 
                  htmlFor="auditorium100" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auditório (100 pessoas)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="auditorium80" 
                  checked={formData.spaces.auditorium80}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("auditorium80", checked === true)
                  }
                />
                <label 
                  htmlFor="auditorium80" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auditório (80 pessoas)
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="alternativeSpace">Espaço alternativo</Label>
            <Select 
              value={formData.alternativeSpace} 
              onValueChange={handleSelectChange}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Selecione um espaço alternativo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="space1">Sala de Conferência</SelectItem>
                <SelectItem value="space2">Sala de Reunião</SelectItem>
                <SelectItem value="space3">Espaço Aberto</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox 
              id="terms" 
              checked={formData.termsAgreed}
              onCheckedChange={(checked) => 
                handleCheckboxChange("termsAgreed", checked === true)
              }
              required
            />
            <label 
              htmlFor="terms" 
              className="text-sm text-gray-700"
            >
              Concordo com os <a href="https://www.liferay.com/pt/home" target="blank" className="text-blue-500 no-underline font-medium hover:text-blue-700">termos de uso</a> *
            </label>
          </div>
          
          <Button type="submit" className="bg-formBlue hover:bg-formBlue-dark w-full sm:w-auto">
            Enviar solicitação
          </Button>
        </div>
      </form>
    </div>
  );
};