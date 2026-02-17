import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const EventFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-3 text-gradient">InnoSummit 2026</h3>
            <p className="text-sm text-muted-foreground">The premier college tech fest for innovators and builders.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail size={14} /> summit@xyzuniversity.edu</div>
              <div className="flex items-center gap-2"><Phone size={14} /> +1 (555) 987-6543</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> XYZ University, Main Campus</div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Social link">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          © {year} Innovation Summit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;
