import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface QuoteFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormModal = ({ open, onOpenChange }: QuoteFormModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.email.trim()) {
      toast({
        title: t('quoteForm.error'),
        description: t('quoteForm.fillRequired'),
        variant: 'destructive',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('quoteForm.error'),
        description: t('quoteForm.invalidEmail'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('quoteForm.success'),
        description: t('quoteForm.successMessage'),
      });
      setFormData({ name: '', mobile: '', email: '', message: '' });
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            {t('quoteForm.title')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              name="name"
              placeholder={t('quoteForm.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl bg-primary/5 border-primary/20 focus:border-primary h-12"
            />
          </div>
          
          <div>
            <Input
              name="mobile"
              type="tel"
              placeholder={t('quoteForm.mobilePlaceholder')}
              value={formData.mobile}
              onChange={handleChange}
              className="rounded-xl bg-primary/5 border-primary/20 focus:border-primary h-12"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder={t('quoteForm.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl bg-primary/5 border-primary/20 focus:border-primary h-12"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder={t('quoteForm.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="rounded-xl bg-primary/5 border-primary/20 focus:border-primary resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('quoteForm.submitting') : t('quoteForm.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
