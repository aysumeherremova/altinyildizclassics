import {
  Search,
  Heart,
  Eye,
  User,
  ShoppingBag,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroCarousel } from "@/components/HeroCarousel";
import FlashProducts from "@/components/FlashProducts";
import GiftGuide from "@/components/GiftGuide";
import PhotoCard from "@/components/PhotoCard";
import PhotoCard1 from "@/components/PhotoCard1";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* scrolling banner */}
      <div className="bg-red-500 text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700">
              <Menu size={20} />
              <span className="text-sm font-medium">MENÜ</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider">
                ALTINYILDIZ
              </span>
              <span className="text-2xl">★</span>
              <span className="text-2xl font-bold tracking-wider">
                CLASSICS
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Search size={20} className="text-gray-700" />
              <Heart size={20} className="text-gray-700" />
              <Eye size={20} className="text-gray-700" />
              <User size={20} className="text-gray-700" />
              <div className="relative">
                <ShoppingBag size={20} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-4 text-xs">
            <a href="#" className="text-red-500 font-medium">
              EN BABA BAYRAM
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Takım Elbise
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Gömlek
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Basic Tişört
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Polo Tişört
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Pantolon
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Jean
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Şort / Mayo
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Sweatshirt
            </a>
            |
            <a href="#" className="text-red-500 font-medium">
              Çok Satanlar
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              STARS
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-4">
        <HeroCarousel />
      </section>

      {/* Category Cards */}
      <section className="mt-8">
        <FlashProducts />
      </section>

      {/* Gift Guide */}
      <section className="p-0 m-0">
        <GiftGuide />
      </section>

      {/* Photo Card */}
      <section className="mt-2">
        <PhotoCard />
      </section>

       <section className="mt-2">
        <PhotoCard1 />
      </section>

    </div>
  );
}
