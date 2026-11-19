import React from 'react';
import * as LucideIcons from 'lucide-react';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconBrandTiktok,
  IconBrandGoogle,
  IconBrandGithub,
} from '@tabler/icons-react';

export * as TablerIcons from '@tabler/icons-react';

// Map of social & brand names to Tabler brand icons
const BRAND_MAP = {
  facebook: IconBrandFacebook,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  x: IconBrandX,
  youtube: IconBrandYoutube,
  whatsapp: IconBrandWhatsapp,
  tiktok: IconBrandTiktok,
  google: IconBrandGoogle,
  github: IconBrandGithub,
};

// Comprehensive map of all icon names used across the project to Lucide icon components
const LUCIDE_MAP = {
  // Navigation & UI
  menu: LucideIcons.Menu,
  close: LucideIcons.X,
  chevron_right: LucideIcons.ChevronRight,
  chevron_left: LucideIcons.ChevronLeft,
  keyboard_arrow_up: LucideIcons.ChevronUp,
  'keyboard-arrow-up': LucideIcons.ChevronUp,
  arrow_forward: LucideIcons.ArrowRight,
  arrow_back: LucideIcons.ArrowLeft,
  send: LucideIcons.Send,

  // Sectors, Business & Institutions
  domain: LucideIcons.Building2,
  business: LucideIcons.Building2,
  trending_up: LucideIcons.TrendingUp,
  memory: LucideIcons.Cpu,
  language: LucideIcons.Globe,
  emoji_objects: LucideIcons.Lightbulb,
  lightbulb: LucideIcons.Lightbulb,
  lightbulb_outline: LucideIcons.Lightbulb,
  play_circle: LucideIcons.PlayCircle,
  play_circle_filled: LucideIcons.PlayCircle,
  play_circle_outline: LucideIcons.PlayCircle,
  flight_takeoff: LucideIcons.PlaneTakeoff,
  flight: LucideIcons.Plane,
  handshake: LucideIcons.Handshake,
  group_add: LucideIcons.UserPlus,
  groups: LucideIcons.Users,
  location_city: LucideIcons.Building,
  architecture: LucideIcons.DraftingCompass,
  real_estate_agent: LucideIcons.Building2,
  account_balance: LucideIcons.Landmark,
  apartment: LucideIcons.Building,
  design_services: LucideIcons.Palette,
  rocket_launch: LucideIcons.Rocket,
  router: LucideIcons.Router,
  layers: LucideIcons.Layers,

  // Media, Platform & Social Icons
  share: LucideIcons.Share2,
  videocam: LucideIcons.Video,
  music_note: LucideIcons.Music,
  podcasts: LucideIcons.Podcast,
  article: LucideIcons.FileText,
  location_on: LucideIcons.MapPin,
  mail: LucideIcons.Mail,
  email: LucideIcons.Mail,
  phone: LucideIcons.Phone,
  schedule: LucideIcons.Clock,
  photo_camera: LucideIcons.Camera,
  public: LucideIcons.Globe,
  tag: LucideIcons.Hash,
  work: LucideIcons.Briefcase,
  coffee: LucideIcons.Coffee,
  sports_tennis: LucideIcons.Activity,
  shop: LucideIcons.ShoppingBag,
  storefront: LucideIcons.Store,
  qr_code: LucideIcons.QrCode,
  qr_code_2: LucideIcons.QrCode,
  view_in_ar: LucideIcons.Boxes,

  // Values, Security, Status & Legal
  verified_user: LucideIcons.ShieldCheck,
  shield: LucideIcons.Shield,
  security: LucideIcons.ShieldCheck,
  admin_panel_settings: LucideIcons.ShieldAlert,
  lock: LucideIcons.Lock,
  star: LucideIcons.Star,
  settings_suggest: LucideIcons.Settings,
  volunteer_activism: LucideIcons.HeartHandshake,
  workspace_premium: LucideIcons.Award,
  favorite: LucideIcons.Heart,
  eco: LucideIcons.Leaf,
  check_circle: LucideIcons.CheckCircle2,
  check_circle_outline: LucideIcons.CheckCircle2,
  info: LucideIcons.Info,
  info_outline: LucideIcons.Info,
  help: LucideIcons.HelpCircle,
  help_outline: LucideIcons.HelpCircle,
  error_outline: LucideIcons.AlertCircle,
  visibility: LucideIcons.Eye,
  insights: LucideIcons.LineChart,
  gavel: LucideIcons.Gavel,
  assessment: LucideIcons.ClipboardList,
  engineering: LucideIcons.Wrench,
  edit: LucideIcons.FileEdit,
  delete: LucideIcons.Trash2,
  block: LucideIcons.Ban,
  cancel: LucideIcons.XCircle,
  file_download: LucideIcons.Download,
  cookie: LucideIcons.Cookie,
  description: LucideIcons.FileText,
  devices: LucideIcons.MonitorSmartphone,
  history: LucideIcons.History,
  person: LucideIcons.User,
  storage: LucideIcons.HardDrive,
  update: LucideIcons.RefreshCw,
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
    LucideIcons[rawKey] ||
    LucideIcons[normalizedKey];

  const numSize = typeof size === 'number' ? size : parseInt(size, 10) || 24;

  if (IconComponent) {
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

  // Graceful fallback to Material Symbols font if icon is not mapped to Lucide
  return (
    <span
      className={`material-symbols-outlined material-icons ${className}`}
      style={{
        fontSize: `${numSize}px`,
        width: `${numSize}px`,
        height: `${numSize}px`,
        color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        verticalAlign: 'middle',
        userSelect: 'none',
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {rawKey}
    </span>
  );
}

export default Icon;
