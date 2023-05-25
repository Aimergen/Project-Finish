import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Image from "next/image";

export default function Spinner() {
  return (
    <div>
      <Image
        src={"https://bluexp.netapp.com/hubfs/Elasticsearch%20on%20Kubernetes%20DIY%20vs.%20Elasticsearch%20Operator%20-%20Blog%201200x672.png"
          // "https://images-ext-1.discordapp.net/external/AlfNSHq4iZ26H5CkWMRlaRskIdgC51zW6ilh8LTQn1c/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2/https/images.pexels.com/photos/5208310/pexels-photo-5208310.jpeg?width=2304&height=1536"
        }
        alt="image"
        width={4000}
        height={4000}
        className="w-full max-h-[400px] bg-cover object-cover"
      />
    </div>
  );
}
