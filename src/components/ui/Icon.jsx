import React from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  Ban,
  Boxes,
  Briefcase,
  Building,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  ChevronUp,
  ClipboardList,
  Clock,
  Coffee,
  Cookie,
  Cpu,
  CircleHelp,
  CircleParking,
  Download,
  DraftingCompass,
  Eye,
  FileEdit,
  FileText,
  Gamepad2,
  Gavel,
  Globe,
  Handshake,
  HardDrive,
  Heart,
  HeartHandshake,
  History,
  Home,
  Info,
  Landmark,
  Leaf,
  Lightbulb,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Music,
  Palette,
  PlaneTakeoff,
  PlayCircle,
  Podcast,
  QrCode,
  RefreshCw,
  Rocket,
  Router,
  Send,
  Settings,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Store,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  Users,
  UtensilsCrossed,
  Video,
  Wrench,
  X,
  XCircle,
} from 'lucide-react';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';

// Map of social & brand names to Tabler brand icons
const BRAND_MAP = {
  facebook: IconBrandFacebook,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
};

// Only the icons actually used across the app. Named imports let the bundler
// tree-shake lucide-react instead of shipping the whole library.
const LUCIDE_MAP = {
  // Navigation & UI
  menu: Menu,
  close: X,
  chevron_right: ChevronRight,
  keyboard_arrow_up: ChevronUp,
  'keyboard-arrow-up': ChevronUp,
  arrow_forward: ArrowRight,
  send: Send,

  // Business, sectors & institutions
  domain: Building2,
  business: Building2,
  trending_up: TrendingUp,
  memory: Cpu,
  language: Globe,
  emoji_objects: Lightbulb,
  lightbulb: Lightbulb,
  play_circle: PlayCircle,
  flight_takeoff: PlaneTakeoff,
  handshake: Handshake,
  group_add: UserPlus,
  groups: Users,
  location_city: Building,
  architecture: DraftingCompass,
  account_balance: Landmark,
  apartment: Building,
  design_services: Palette,
  rocket_launch: Rocket,
  router: Router,
  home: Home,

  // Media, contact & lifestyle
  share: Share2,
  videocam: Video,
  music_note: Music,
  podcasts: Podcast,
  article: FileText,
  location_on: MapPin,
  mail: Mail,
  schedule: Clock,
  photo_camera: Camera,
  public: Globe,
  work: Briefcase,
  coffee: Coffee,
  sports_tennis: Activity,
  storefront: Store,
  qr_code_2: QrCode,
  view_in_ar: Boxes,
  spray_can: SprayCan,
  gamepad_2: Gamepad2,
  sparkles: Sparkles,
  restaurant: UtensilsCrossed,
  local_parking: CircleParking,

  // Values, security & legal
  verified_user: ShieldCheck,
  shield: Shield,
  security: ShieldCheck,
  admin_panel_settings: ShieldAlert,
  lock: Lock,
  star: Star,
  settings_suggest: Settings,
  volunteer_activism: HeartHandshake,
  workspace_premium: Award,
  favorite: Heart,
  eco: Leaf,
  check_circle: CheckCircle2,
  info: Info,
  help: CircleHelp,
  visibility: Eye,
  insights: LineChart,
  gavel: Gavel,
  assessment: ClipboardList,
  engineering: Wrench,
  edit: FileEdit,
  delete: Trash2,
  block: Ban,
  cancel: XCircle,
  file_download: Download,
  cookie: Cookie,
  description: FileText,
  devices: MonitorSmartphone,
  history: History,
  person: User,
  storage: HardDrive,
  update: RefreshCw,
};

export function Icon({ name, size = 24, color = 'currentColor', className = '', style = {}, ...props }) {
  if (!name) return null;
  const rawKey = String(name).trim();
  const normalizedKey = rawKey.toLowerCase().replace(/-/g, '_');

  const IconComponent =
    BRAND_MAP[normalizedKey] ||
    BRAND_MAP[rawKey] ||
    LUCIDE_MAP[normalizedKey] ||
    LUCIDE_MAP[rawKey] ||
    CircleHelp;

  const numSize = typeof size === 'number' ? size : parseInt(size, 10) || 24;
  const isStar = normalizedKey === 'star';
  const fill = props.fill || (isStar ? color : 'none');

  return (
    <IconComponent
      size={numSize}
      color={color}
      fill={fill}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Icon;