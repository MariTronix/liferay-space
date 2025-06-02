import React, { useState } from "react";
import { Input } from "@/formulario/ui/input";
import { Label } from "@/formulario/ui/label";
import { Checkbox } from "@/formulario/ui/checkbox";
import { Textarea } from "@/formulario/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Request, Space, SpaceType } from "../types"; 
import { spaces } from "../data/requestData";      
import { useReservations } from '../contexts/ReservationsContext'; 

const YOUR_PRIMARY_BLUE = '#1D4ED8';
const YOUR_PRIMARY_BLUE_DARK = '#1E40AF';
const PAGE_BACKGROUND_COLOR = '#f3f4f6';
const CARD_BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR_DARK = '#1f2937';
const TEXT_COLOR_MEDIUM = '#374151';
const TEXT_COLOR_LIGHT = '#4b5563';
const TEXT_COLOR_WHITE = '#ffffff';
const LINK_COLOR = '#2563EB';
const LINK_HOVER_COLOR = YOUR_PRIMARY_BLUE;
const BORDER_COLOR_LIGHT = '#E5E7EB';
const SECTION_BORDER_COLOR = YOUR_PRIMARY_BLUE;
const SELECTED_BACKGROUND_COLOR = '#DBEAFE'; 
const SELECTED_BORDER_COLOR = YOUR_PRIMARY_BLUE; 

const pageWrapperStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', minHeight: '100vh',
  backgroundColor: PAGE_BACKGROUND_COLOR, fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};
const mainContentStyle: React.CSSProperties = {
  flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
  paddingTop: '10rem', paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '3rem',
};
const formContainerStyle: React.CSSProperties = { width: '100%', maxWidth: '64rem' };
const formHeaderStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '2.5rem' };
const formTitleStyle: React.CSSProperties = {
  fontSize: '2.25rem', lineHeight: '2.75rem', fontWeight: 'bold',
  color: YOUR_PRIMARY_BLUE, marginBottom: '0.75rem',
};
const formSubtitleStyle: React.CSSProperties = { color: TEXT_COLOR_LIGHT, fontSize: '1rem' };
const formBaseStyle: React.CSSProperties = {
  backgroundColor: CARD_BACKGROUND_COLOR, borderRadius: '0.75rem',
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
  padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem',
};
const formSectionStyle: React.CSSProperties = {};
const formSectionTitleStyle: React.CSSProperties = {
  fontSize: '1.375rem', fontWeight: '600', color: TEXT_COLOR_DARK, marginBottom: '1.5rem',
  borderBottom: `2px solid ${SECTION_BORDER_COLOR}`, paddingBottom: '0.75rem',
};
const formElementGroupStyle: React.CSSProperties = {
  display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem',
};
const formInputElementContainerStyle: React.CSSProperties = {
  flex: '1 1 300px', minWidth: '250px', display: 'flex',
  flexDirection: 'column', gap: '0.5rem',
};
const FallbackLabelStyle: React.CSSProperties = {
  fontSize: '0.875rem', fontWeight: '600', color: TEXT_COLOR_MEDIUM, display: 'block',
};
const FallbackInputBaseStyle: React.CSSProperties = {
  width: '100%', padding: '0.75rem 1rem', border: `1px solid ${BORDER_COLOR_LIGHT}`,
  borderRadius: '0.375rem', fontSize: '1rem', color: TEXT_COLOR_DARK,
  backgroundColor: '#fff', boxSizing: 'border-box',
};
const FallbackTextareaSpecificStyle: React.CSSProperties = {
  ...FallbackInputBaseStyle, minHeight: '120px', resize: 'vertical',
};
const checkboxLabelStyle: React.CSSProperties = {
  fontSize: '0.875rem', fontWeight: '500', color: TEXT_COLOR_MEDIUM,
  userSelect: 'none', flexGrow: 1, textAlign: 'center',
};
const nestedCardStyleBase: React.CSSProperties = {
  backgroundColor: CARD_BACKGROUND_COLOR, borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  border: `1px solid ${BORDER_COLOR_LIGHT}`, padding: '1rem',
  transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
};
const checkboxItemCardStyle: React.CSSProperties = {
  ...nestedCardStyleBase, 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  gap: '0.75rem',
  cursor: 'pointer',
  minHeight: '3.5rem',
};
const selectedCheckboxItemCardStyle: React.CSSProperties = {
  backgroundColor: SELECTED_BACKGROUND_COLOR,
  border: `1px solid ${SELECTED_BORDER_COLOR}`,
};
const termsSectionStyle: React.CSSProperties = {
  backgroundColor: '#f9fafb', padding: '1.5rem',
  borderRadius: '0.5rem', marginTop: '1.5rem',
};

export const ReservationForm = () => {
  const { toast } = useToast();
  const { addReservation } = useReservations();

  const initialSpacesState = spaces.reduce((acc, spaceItem) => {
    acc[spaceItem.id] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const initialFormState = {
    responsibleName: "", institutionName: "", email: "", phone: "",
    eventName: "", eventDescription: "",
    date: "", startTime: "", endTime: "", participants: "",
    spaces: initialSpacesState,
    termsAgreed: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isTermsLinkHovered, setIsTermsLinkHovered] = useState(false);

  const termsLinkStyle = (isHoveredParam: boolean): React.CSSProperties => ({
    color: isHoveredParam ? LINK_HOVER_COLOR : LINK_COLOR,
    textDecoration: 'underline', fontWeight: '600',
  });

  const submitButtonStyle = (isHoveredParam: boolean): React.CSSProperties => ({
    backgroundColor: isHoveredParam ? YOUR_PRIMARY_BLUE_DARK : YOUR_PRIMARY_BLUE,
    color: TEXT_COLOR_WHITE, fontWeight: 'bold', padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem', border: 'none', cursor: 'pointer',
    width: '100%', fontSize: '1rem', textAlign: 'center',
    transition: 'background-color 0.2s ease-in-out',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? (value === '' ? '' : parseFloat(value)) : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    console.log(`[handleCheckboxChange] Iniciando para name: "${name}", checked: ${checked}`);
    if (name === "termsAgreed") {
      setFormData((prev) => {
        console.log('[handleCheckboxChange] Atualizando termsAgreed');
        return { ...prev, termsAgreed: checked };
      });
    } else { 
      setFormData((prevFormData) => {
        console.log(`[handleCheckboxChange] Atualizando espaço: "${name}" para ${checked}. Estado anterior de spaces:`, prevFormData.spaces);
        const newSpacesState = Object.keys(prevFormData.spaces).reduce((acc, key) => {
          acc[key] = false; 
          return acc;
        }, {} as Record<string, boolean>);
        
        if (checked) { 
          newSpacesState[name] = true;
        }
        console.log('[handleCheckboxChange] Novo estado de spaces (seleção única):', newSpacesState);
        return {
          ...prevFormData,
          spaces: newSpacesState,
        };
      });
    }
    console.log(`[handleCheckboxChange] Finalizado para name: "${name}"`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.responsibleName || !formData.email || !formData.eventName || !formData.date || !formData.termsAgreed) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha: Nome Responsável, Email, Nome Evento, Data e Termos.",
        variant: "destructive",
      });
      return;
    }

    const selectedSpaceId = Object.keys(formData.spaces).find(
      (spaceIdKey) => formData.spaces[spaceIdKey] === true
    );

    if (!selectedSpaceId) {
      toast({
        title: "Seleção de Espaço Obrigatória",
        description: "Por favor, selecione um espaço.",
        variant: "destructive",
      });
      return;
    }

    const selectedSpace = spaces.find(s => s.id === selectedSpaceId);
    if (!selectedSpace) {
        toast({ title: "Erro interno", description: "Espaço selecionado inválido.", variant: "destructive" });
        return;
    }

    const requestDataForContext: Omit<Request, 'id' | 'createdAt' | 'status'> = {
      title: formData.eventName,
      requesterName: formData.responsibleName,
      requesterEmail: formData.email,
      spaceId: selectedSpace.id,
      spaceName: selectedSpace.name as SpaceType,
      attendees: Number(formData.participants) || 0, 
      eventDate: formData.date,
      startTime: formData.startTime || "N/A",
      endTime: formData.endTime || "N/A",
      description: formData.eventDescription || "Nenhuma descrição fornecida.",
    };
    
    console.log('Formulário: Dados PRONTOS para enviar ao contexto (seleção única):', requestDataForContext);
    try {
        addReservation(requestDataForContext);
        console.log('Formulário: Função addReservation do contexto FOI CHAMADA.');
        toast({
            title: "Solicitação Enviada!",
            description: `O evento "${formData.eventName}" para o espaço "${selectedSpace.name}" foi solicitado com sucesso.`,
        });
        setFormData(initialFormState);
    } catch (error) {
        console.error('Formulário: Erro ao chamar addReservation:', error);
        toast({ title: "Erro ao Enviar", description: "Não foi possível processar a solicitação.", variant: "destructive"});
    }
  };
  
  return (
    <div>
      <div style={pageWrapperStyle}>
        <Header />
        <main style={mainContentStyle}>
          <div style={formContainerStyle}>
            <div style={formHeaderStyle}>
                <h1 style={formTitleStyle}>Solicite sua reserva</h1>
                <p style={formSubtitleStyle}>Preencha o formulário abaixo para solicitar sua reserva.</p>
            </div>

            <form onSubmit={handleSubmit} style={formBaseStyle}>
              {/* Seção de Informações de Contato */}
              <section style={formSectionStyle}>
                <h3 style={formSectionTitleStyle}>Informações para contato</h3>
                <div style={formElementGroupStyle}>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="responsibleName" style={FallbackLabelStyle}>Nome do responsável *</Label>
                    <Input id="responsibleName" name="responsibleName" value={formData.responsibleName} onChange={handleInputChange} placeholder="Digite o nome completo" required style={FallbackInputBaseStyle} />
                  </div>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="institutionName" style={FallbackLabelStyle}>Nome da comunidade/instituição</Label>
                    <Input id="institutionName" name="institutionName" value={formData.institutionName} onChange={handleInputChange} placeholder="Digite o nome da instituição" style={FallbackInputBaseStyle} />
                  </div>
                </div>
                <div style={formElementGroupStyle}>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="email" style={FallbackLabelStyle}>Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Digite seu email" required style={FallbackInputBaseStyle} />
                  </div>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="phone" style={FallbackLabelStyle}>Telefone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Digite seu telefone" style={FallbackInputBaseStyle} />
                  </div>
                </div>
              </section>

              {/* Seção de Detalhes do Evento */}
              <section style={formSectionStyle}>
                <h3 style={formSectionTitleStyle}>Detalhes do evento</h3>
                <div style={{ ...formInputElementContainerStyle, flexBasis: '100%', marginBottom: '1.5rem' }}>
                  <Label htmlFor="eventName" style={FallbackLabelStyle}>Nome do Evento *</Label>
                  <Input id="eventName" name="eventName" value={formData.eventName} onChange={handleInputChange} placeholder="Ex: Workshop de React Avançado" required style={FallbackInputBaseStyle} />
                </div>
                <div style={{ ...formInputElementContainerStyle, flexBasis: '100%', marginBottom: '1.5rem' }}>
                  <Label htmlFor="eventDescription" style={FallbackLabelStyle}>Descrição detalhada do evento</Label>
                  <Textarea id="eventDescription" name="eventDescription" value={formData.eventDescription} onChange={handleInputChange} placeholder="Forneça detalhes sobre o evento..." style={FallbackTextareaSpecificStyle} />
                </div>
                <div style={{ ...formElementGroupStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="date" style={FallbackLabelStyle}>Data *</Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required style={FallbackInputBaseStyle} />
                  </div>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="startTime" style={FallbackLabelStyle}>Horário do início</Label>
                    <Input id="startTime" name="startTime" type="time" value={formData.startTime} onChange={handleInputChange} style={FallbackInputBaseStyle} />
                  </div>
                  <div style={formInputElementContainerStyle}>
                    <Label htmlFor="endTime" style={FallbackLabelStyle}>Horário do término</Label>
                    <Input id="endTime" name="endTime" type="time" value={formData.endTime} onChange={handleInputChange} style={FallbackInputBaseStyle} />
                  </div>
                </div>
                <div style={{ ...formInputElementContainerStyle, marginBottom: '1.5rem', flexBasis: '100%' }}>
                  <Label htmlFor="participants" style={FallbackLabelStyle}>Número estimado de participantes</Label>
                  <Input id="participants" name="participants" type="number" min="0" value={formData.participants} onChange={handleInputChange} placeholder="Ex: 50" style={FallbackInputBaseStyle} />
                </div>

                {/* Seção de Seleção de Espaço */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <Label style={{...FallbackLabelStyle, display: 'block', marginBottom: '1rem' }}>Seleção de espaço (Marque uma opção) *</Label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                    {spaces.map((spaceItem) => {
                      const isSelected = !!formData.spaces[spaceItem.id];
                      const currentItemStyle = isSelected 
                        ? { ...checkboxItemCardStyle, ...selectedCheckboxItemCardStyle } 
                        : checkboxItemCardStyle;
                      
                      return (
                        <div 
                          key={spaceItem.id} 
                          style={currentItemStyle}
                          onClick={() => {
                            console.log(`Card div clicado para ${spaceItem.name}, estado atual: ${isSelected}, mudando para ${!isSelected}`);
                            handleCheckboxChange(spaceItem.id, !isSelected);
                          }}
                          role="radio" 
                          aria-checked={isSelected}
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              console.log(`Card div tecla pressionada para ${spaceItem.name}, mudando estado`);
                              handleCheckboxChange(spaceItem.id, !isSelected);
                            }
                          }}
                        > 

                          <span style={checkboxLabelStyle}>
                            {spaceItem.name} ({spaceItem.capacity} pessoas)
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Seção de Termos e Envio */}
              <div style={termsSectionStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Checkbox id="terms" checked={formData.termsAgreed} onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", Boolean(checked))} required />
                  <label htmlFor="terms" style={checkboxLabelStyle}>
                    Concordo com os <a
                      href="https://www.liferay.com/pt/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={termsLinkStyle(isTermsLinkHovered)}
                      onMouseEnter={() => setIsTermsLinkHovered(true)}
                      onMouseLeave={() => setIsTermsLinkHovered(false)}
                    >
                      termos de uso
                    </a> *
                  </label>
                </div>
                <button
                  type="submit"
                  style={submitButtonStyle(isSubmitHovered)}
                  onMouseEnter={() => setIsSubmitHovered(true)}
                  onMouseLeave={() => setIsSubmitHovered(false)}
                >
                  Enviar solicitação
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationForm; 
