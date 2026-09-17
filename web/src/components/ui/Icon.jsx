import {
  Award, Users, Building2, Stethoscope, UserSearch, UserMinus, HeartHandshake,
  TrendingDown, Hourglass, Siren, Sparkles, HeartPulse, ShieldCheck, Scissors,
  Activity, Scan, MapPin, Microscope, Wallet, Clock, Truck, ArrowRight, Check,
  User, Briefcase, Phone, Mail, Lock,
} from 'lucide-react';

const ICONS = {
  award: Award,
  users: Users,
  'building-2': Building2,
  stethoscope: Stethoscope,
  'user-search': UserSearch,
  'user-minus': UserMinus,
  'heart-handshake': HeartHandshake,
  'trending-down': TrendingDown,
  hourglass: Hourglass,
  siren: Siren,
  sparkles: Sparkles,
  'heart-pulse': HeartPulse,
  'shield-check': ShieldCheck,
  scissors: Scissors,
  activity: Activity,
  scan: Scan,
  'map-pin': MapPin,
  microscope: Microscope,
  wallet: Wallet,
  clock: Clock,
  truck: Truck,
  'arrow-right': ArrowRight,
  check: Check,
  user: User,
  briefcase: Briefcase,
  phone: Phone,
  mail: Mail,
  lock: Lock,
};

export default function Icon({ name, size = 20, style, ...rest }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return (
    <Cmp
      size={size}
      strokeWidth={2}
      style={{ display: 'inline-flex', flex: 'none', ...style }}
      {...rest}
    />
  );
}
