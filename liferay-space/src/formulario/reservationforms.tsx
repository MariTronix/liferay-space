import React, { useState, useEffect } from "react";
import { Input } from "@/formulario/ui/input";
import { Label } from "@/formulario/ui/label";
import { Checkbox } from "@/formulario/ui/checkbox";
import { Textarea } from "@/formulario/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/formulario/ui/select";

import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


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

const pageWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: PAGE_BACKGROUND_COLOR,
  fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const mainContentStyle = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '8rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingBottom: '3rem',
};

const formContainerStyle = {
  width: '100%',
  maxWidth: '64rem',
};

const formHeaderStyle = {
  textAlign: 'center',
  marginBottom: '2.5rem',
};

const formTitleStyle = {
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
  fontWeight: 'bold',
  color: YOUR_PRIMARY_BLUE,
  marginBottom: '0.75rem',
};

const formSubtitleStyle = {
  color: TEXT_COLOR_LIGHT,
  fontSize: '1rem',
};

const formBaseStyle = {
  backgroundColor: CARD_BACKGROUND_COLOR,
  borderRadius: '0.75rem',
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', 
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
};

const formSectionStyle = {

};

const formSectionTitleStyle = {
  fontSize: '1.375rem',
  fontWeight: '600',
  color: TEXT_COLOR_DARK,
  marginBottom: '1.5rem',
  borderBottom: `2px solid ${SECTION_BORDER_COLOR}`,
  paddingBottom: '0.75rem',
};

const formElementGroupStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  marginBottom: '1.5rem',
};

const formInputElementContainerStyle = {
  flex: '1 1 300px',
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyle = {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: TEXT_COLOR_MEDIUM,
  display: 'block',
};

const inputBaseStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: `1px solid ${BORDER_COLOR_LIGHT}`,
  borderRadius: '0.375rem',
  fontSize: '1rem',
  color: TEXT_COLOR_DARK,
  backgroundColor: '#fff',
  boxSizing: 'border-box',
};

const textareaSpecificStyle = {
  ...inputBaseStyle,
  minHeight: '120px',
  resize: 'vertical',
};

const checkboxLabelStyle = {
  fontSize: '0.875rem',
  fontWeight: '500',
  color: TEXT_COLOR_MEDIUM,
  cursor: 'pointer',
  userSelect: 'none',
};

const nestedCardStyleBase = {
  backgroundColor: CARD_BACKGROUND_COLOR, 
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${BORDER_COLOR_LIGHT}`,
  padding: '1rem',
};

const checkboxItemCardStyle = {
  ...nestedCardStyleBase,
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const alternativeSpaceCardStyle = {
  ...nestedCardStyleBase, 
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const termsSectionStyle = {
  backgroundColor: '#f9fafb',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  marginTop: '1.5rem',
};

const termsLinkStyle = (isHovered) => ({
  color: isHovered ? LINK_HOVER_COLOR : LINK_COLOR,
  textDecoration: 'underline',
  fontWeight: '600',
});

const submitButtonStyle = (isHovered) => ({
  backgroundColor: isHovered ? YOUR_PRIMARY_BLUE_DARK : YOUR_PRIMARY_BLUE,
  color: TEXT_COLOR_WHITE,
  fontWeight: 'bold',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.375rem',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  fontSize: '1rem',
  textAlign: 'center',
  transition: 'background-color 0.2s ease-in-out',
});


export const ReservationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    responsibleName: "", institutionName: "", email: "", phone: "",
    date: "", startTime: "", endTime: "", participants: "",
    spaces: {
      auditorium180: false, auditorium5: false, auditorium120: false,
      auditorium100: false, auditorium80: false,
    },
    alternativeSpace: "", eventDescription: "", termsAgreed: false,
  });
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isTermsLinkHovered, setIsTermsLinkHovered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? (value === '' ? '' : parseFloat(value)) : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleCheckboxChange = (name, checked) => {
    if (name === "termsAgreed") {
      setFormData((prev) => ({ ...prev, termsAgreed: checked }));
    } else {
      setFormData((prev) => ({
        ...prev,
        spaces: { ...prev.spaces, [name]: checked },
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, alternativeSpace: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.responsibleName || !formData.email || !formData.date || !formData.termsAgreed) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    console.log("Form submitted:", formData);
    toast({
      title: "Solicitação enviada",
      description: "Sua solicitação de reserva foi enviada com sucesso!",
    });
  };
  
  return (
    <div style={pageWrapperStyle}>
      <Header />
      <main style={mainContentStyle}>
        <div style={formContainerStyle}>
          <div style={formHeaderStyle}>
            <h1 style={formTitleStyle}>Solicite sua reserva</h1>
            <p style={formSubtitleStyle}>Preencha o formulário abaixo para solicitar sua reserva.</p>
          </div>

          <form onSubmit={handleSubmit} style={formBaseStyle}>
            <section style={formSectionStyle}>
              <h3 style={formSectionTitleStyle}>Informações para contato</h3>
              <div style={formElementGroupStyle}>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="responsibleName" style={labelStyle}>Nome do responsável *</Label>
                  <Input id="responsibleName" name="responsibleName" value={formData.responsibleName} onChange={handleInputChange} placeholder="Digite o nome completo" required style={inputBaseStyle} />
                </div>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="institutionName" style={labelStyle}>Nome da comunidade/instituição</Label>
                  <Input id="institutionName" name="institutionName" value={formData.institutionName} onChange={handleInputChange} placeholder="Digite o nome da instituição" style={inputBaseStyle} />
                </div>
              </div>
              <div style={formElementGroupStyle}>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="email" style={labelStyle}>Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Digite seu email" required style={inputBaseStyle} />
                </div>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="phone" style={labelStyle}>Telefone</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Digite seu telefone" style={inputBaseStyle} />
                </div>
              </div>
            </section>

            <section style={formSectionStyle}>
              <h3 style={formSectionTitleStyle}>Detalhes do evento</h3>
              <div style={{ ...formElementGroupStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="date" style={labelStyle}>Data *</Label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required style={inputBaseStyle} />
                </div>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="startTime" style={labelStyle}>Horário do início</Label>
                  <Input id="startTime" name="startTime" type="time" value={formData.startTime} onChange={handleInputChange} style={inputBaseStyle} />
                </div>
                <div style={formInputElementContainerStyle}>
                  <Label htmlFor="endTime" style={labelStyle}>Horário do término</Label>
                  <Input id="endTime" name="endTime" type="time" value={formData.endTime} onChange={handleInputChange} style={inputBaseStyle} />
                </div>
              </div>

              <div style={{ ...formInputElementContainerStyle, marginBottom: '1.5rem', flexBasis: '100%' }}>
                <Label htmlFor="eventDescription" style={labelStyle}>Descrição do evento</Label>
                <Textarea id="eventDescription" name="eventDescription" value={formData.eventDescription} onChange={handleInputChange} placeholder="Descreva o evento em detalhes..." style={textareaSpecificStyle} />
              </div>

              <div style={{ ...formInputElementContainerStyle, marginBottom: '1.5rem', flexBasis: '100%' }}>
                <Label htmlFor="participants" style={labelStyle}>Número estimado de participantes</Label>
                <Input id="participants" name="participants" type="number" value={formData.participants} onChange={handleInputChange} placeholder="Digite o número de participantes" style={inputBaseStyle} />
              </div>

   
              <div style={{ marginBottom: '1.5rem' }}>
                <Label style={{...labelStyle, marginBottom: '1rem' }}>Seleção de espaços</Label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {Object.keys(formData.spaces).map((spaceKey) => (
                    <div key={spaceKey} style={checkboxItemCardStyle}> 
                      <Checkbox
                        id={spaceKey}
                        checked={formData.spaces[spaceKey]}
                        onCheckedChange={(checked) => handleCheckboxChange(spaceKey, Boolean(checked))}
                      />
                      <label htmlFor={spaceKey} style={checkboxLabelStyle}>
                        Auditório ({spaceKey.replace('auditorium', '')} pessoas)
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Espaço alternativo COM CARD ATUALIZADO
              <div style={{ ...formInputElementContainerStyle, ...alternativeSpaceCardStyle, flexBasis: '100%', minWidth: 'auto' }}>
                <Label htmlFor="alternativeSpace" style={labelStyle}>Espaço alternativo</Label>
                <Select value={formData.alternativeSpace} onValueChange={handleSelectChange}>
                  <SelectTrigger style={inputBaseStyle}>
                    <SelectValue placeholder="Selecione um espaço alternativo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="space1">Sala de Conferência</SelectItem>
                    <SelectItem value="space2">Sala de Reunião</SelectItem>
                    <SelectItem value="space3">Espaço Aberto</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </section>

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
      <hr />
      <Footer />
    </div>
  );
};

