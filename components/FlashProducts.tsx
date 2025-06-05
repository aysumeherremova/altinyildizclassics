"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlashProducts() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1279px)": {
        slides: { perView: 3.2, spacing: 16 },
      },
      "(max-width: 1023px)": {
        slides: { perView: 2.2, spacing: 12 },
      },
      "(max-width: 639px)": {
        slides: { perView: 1.2, spacing: 8 },
      },
    },
  });

  const coupons = [
    {
      title: "%100 Pamuk Oxford Slim Fit Dar Kesim Düğmeli Yaka Beyaz...",
      price: 743.5,
      oldPrice: 773.99,
      image: "/kupon.jpg",
    },
  ];

  const products = [
    {
      title: "%100 Pamuk Oxford Slim Fit Dar Kesim Düğmeli Yaka Beyaz...",
      price: 743.5,
      oldPrice: 773.99,
      image: "/product1.jpeg",
    },
    {
      title: "Slim Fit Dar Kesim Kıvrılmaz Polo Yaka Kısa Kollu Açık Mavi...",
      price: 416.67,
      oldPrice: 453.99,
      image: "/product2.jpeg",
    },
    {
      title: "Slim Fit Dar Kesim Bisiklet Yaka %100 Pamuk Kısa Kollu...",
      price: 303.99,
      oldPrice: null,
      image: "/product3.jpeg",
    },
    {
      title: "Regular Fit Geniş Kesim Polo Yaka %100 Pamuk Ekru-Bordo...",
      price: 619.32,
      oldPrice: 679.99,
      image: "/product4.jpeg",
    },
    {
      title: "Slim Fit Dar Kesim Bisiklet Yaka %100 Pamuk ısa Kollu Siyah...",
      price: 309.99,
      oldPrice: 303.99,
      image: "/product5.jpeg",
    },
    {
      title: "Comfort Fit Rahat Kesim Düğmeli Yaka Casual Keten Yavruağzı...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product6.jpeg",
    },
    {
      title: "Slim Fit Dar Kesim Bisiklet Yaka %100 Pamuk ısa Kollu...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product7.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product8.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product9.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product10.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product11.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product12.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product13.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product14.jpeg",
    },
    {
      title:
        "Slim Fit Rahat Kesim Beli Bağlamalı Yan Cepli Esnek Jogger Gri...",
      price: 879.32,
      oldPrice: 779.22,
      image: "/product15.jpeg",
    },
  ];

  const combinedItems = [...coupons, ...products];

  return (
    <div className="min-h-screen bg-white py-10 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase border-gray-300 pb-2 mb-6">
          Flaş Ürünler
        </h2>
        {/* Slider Controls */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {combinedItems.map((item, index) => (
              <div className="keen-slider__slide" key={index}>
                <Card className="group cursor-pointer overflow-hidden shadow-md">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full ${
                        index === 0 ? "h-[28rem]" : "h-72"
                      } object-cover transition-transform duration-300`}
                    />
                  </div>

                  {index !== 0 && (
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-semibold text-base">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        {item.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.oldPrice} TL
                          </span>
                        )}
                        <span className="text-lg font-bold text-black">
                          {item.price} TL
                        </span>
                      </div>
                      <Badge className="bg-yellow-800 text-white">
                        Sepette %10 Az Öde
                      </Badge>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {/* Slider  */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
