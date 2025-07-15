export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleWhatsAppClick = (isDemoBooking: boolean = false, customMessage?: string) => {
  const phoneNumber = '+919717418746';
  let message = customMessage;
  if (!message) {
    message = isDemoBooking 
    ? "Hello sir, I would like to book a free demo session at Muscle Torture Fitness. Please help me schedule a convenient time."
    : "Hello sir";
  }
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const handleCallClick = () => {
  window.location.href = 'tel:+919717418746';
};

export const handleStartJourney = () => {
  scrollToSection('training-plans');
};

export const handleFreeTrialClick = () => {
  scrollToSection('contact');
};

export const handleGetStartedClick = (plan: string) => {
  const message = `Hello sir, I'm interested in the ${plan} plan.`;
  const phoneNumber = '+919717418746';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}; 