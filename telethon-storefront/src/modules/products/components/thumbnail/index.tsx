"use client"
import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  name?: string
  className?: string
  "data-testid"?: string
  inventory?: number
  price?: string | number
}

type ImageOrPlaceholderProps = Pick<ThumbnailProps, "size"> & { image?: string, filter?: string }
const ImageOrPlaceholder = ({ image, size, filter }: ImageOrPlaceholderProps) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center !rounded-none"
      draggable={false}
      unselectable="on"
      onDragStart={e => e.preventDefault()}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
      style={filter ? { filter } : undefined}
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}
const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  name,
  className,
  inventory,
  price,
  "data-testid": dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url;
  const isSoldOut = typeof inventory === 'number' && inventory <= 0;
  return (
    <Container
      className={clx(
        "relative w-full overflow-hidden p-4 bg-ui-bg-subtle !rounded-none border-[3px] border-black",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      style={{
        boxShadow: "12px 12px 0 #000",
        transition: "all 0.3s ease"
      }}
      data-testid={dataTestid}
    >
      <div className="absolute inset-0 w-full h-full">
        <div style={{ width: '100%', height: '100%' }}>
          <ImageOrPlaceholder image={initialImage} size={size} filter={isSoldOut ? 'grayscale(1) brightness(0.4)' : undefined} />
        </div>
        {size !== "small" && (
          <div
            className="absolute left-0 right-0 bottom-0"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: 900,
              height: '32px',
              background: '#fff',
              padding: '5px 12px',
              color: isSoldOut ? '#888' : '#000',
              borderTop: '3px solid #000',
              borderBottom: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: isSoldOut ? 'line-through' : 'none',
            }}
          >
            <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, textAlign: 'left', paddingRight: 8}}>{name || 'Item Name'}</span>
            <span style={{
              color: isSoldOut ? '#d32f2f' : '#1DA29A',
              fontWeight: 700,
              textDecoration: 'none',
              flexShrink: 0,
              minWidth: 0,
              textAlign: 'right',
              paddingLeft: 8,
              paddingRight: 0
            }}>
              {isSoldOut ? 'Sold out' : (price ? price : '')}
            </span>
          </div>
        )}
      </div>
    </Container>
  )
}
// (ImageOrPlaceholder already defined above)

export default Thumbnail
