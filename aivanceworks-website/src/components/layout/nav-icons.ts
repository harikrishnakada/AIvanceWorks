// Icon registry for the navigation tree.
//
// NAVIGATION stores icons as strings so the data stays serialisable; this maps
// them back to components. It used to be duplicated in Header and MobileMenu,
// and the two copies had drifted — MobileMenu was missing ~20 of the names
// Header carried, so those rows silently rendered the Code2 `</>` fallback on
// mobile while showing the right icon on desktop.
//
// Keep this in sync with navigation.ts. Every `icon:` string in that file must
// appear here, or `resolveIcon` falls back to Code2:
//   grep -oE "icon: '[A-Za-z0-9]+'" src/lib/navigation.ts | sort -u

import {
  Activity, ArrowRight, BarChart3, Bot, Brain, Building2, CheckCircle,
  ChevronDown, ClipboardList, Cloud, Code2, Compass, Cpu, Database, Eye,
  Factory, FileSignature, FileText, FlaskConical, GitBranch, Globe, Heart,
  Landmark, LayoutGrid, Layers, Lightbulb, Menu, MessageCircle, MessageSquare,
  Microscope, Network, Package, Palette, Pill, Plane, RefreshCw, Rocket, Search,
  Server, ServerCog, Settings, Shield, ShoppingBag, ShoppingCart, Smartphone,
  Sparkles, Stethoscope, Store, TrendingUp, Truck, Users, Utensils, Warehouse,
  Webhook, Workflow, X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Activity, BarChart3, Bot, Brain, Building2, CheckCircle, ClipboardList,
  Cloud, Code2, Compass, Cpu, Database, Eye, Factory, FileSignature, FileText,
  FlaskConical, GitBranch, Globe, Heart, Landmark, LayoutGrid, Layers,
  Lightbulb, MessageCircle, MessageSquare, Microscope, Network, Package,
  Palette, Pill, Plane, RefreshCw, Rocket, Search, Server, ServerCog, Settings,
  Shield, ShoppingBag, ShoppingCart, Smartphone, Sparkles, Stethoscope, Store,
  TrendingUp, Truck, Users, Utensils, Warehouse, Webhook, Workflow,
};

/** Look up a NAVIGATION `icon:` string, falling back to a neutral glyph. */
export function resolveIcon(name: string | undefined): LucideIcon {
  return (name && iconMap[name]) || Code2;
}

// Chrome icons used by the header/menu shell itself rather than by nav data.
export { ArrowRight, ChevronDown, LayoutGrid, Menu, X };
