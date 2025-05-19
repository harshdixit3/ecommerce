"use client";
import Container from "@/components/custom/Container";
import React, { useState } from "react";

import { Product } from "@/types";
import { ProductTabs } from "./ProductTabs";
import Payments from "@/components/custom/Payments";
import RelatedProducts from "./RelatedProducts";
import ProductDesription from "./ProductDesription";

export default function ProductPage({ product }: { product: Product }) {
  const [active, setActive] = useState<number>(0);
  const [images, setImages] = useState(
    product.subProducts[active].options[0].images,
  );

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4">
          <ProductDesription
            active={active}
            product={product}
            images={images}
            setImages={setImages}
            setActive={setActive}
            className=""
          />
          <ProductTabs className="my-10" product={product} />
          <RelatedProducts product={product} />
          <Payments />
        </div>
      </Container>
    </section>
  );
}
