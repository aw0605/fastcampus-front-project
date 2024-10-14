import { putImageFile } from "@/src/apis/r2/putImageFile";
import { Text, Flex } from "@fastcampus/react-components-layout";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

export type ImageURLInputProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const ImageURLInput = ({
  defaultValue,
  onChange,
  placeholder = "이미지 선택",
}: ImageURLInputProps) => {
  const { randomUUID } = new ShortUniqueId({ length: 4 });
  const [uuid] = useState(randomUUID());

  const [imageURL, setImageURL] = useState(defaultValue);

  const handleInputFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.match("image.*")) {
      try {
        const { randomUUID } = new ShortUniqueId({ length: 20 });
        const fileName = randomUUID();
        const imageURL = await putImageFile({
          fileName,
          file,
        });
        setImageURL(imageURL);
        onChange?.(imageURL);
      } catch (error) {
        console.error("이미지 업로드 실패", error);
      }
    }
  };

  return (
    <label htmlFor={`imageFile-${uuid}`}>
      <input
        type="file"
        id={`imageFile-${uuid}`}
        accept=".png, .jpg, .jpeg, .webp"
        style={{ display: "none" }}
        onChange={handleInputFileChange}
      />
      <Flex
        justify="center"
        align="center"
        borderRadius="lg"
        background="gray"
        style={{
          width: "240px",
          height: "180px",
          cursor: "pointer",
        }}
      >
        {imageURL ? (
          <img
            src={imageURL}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Text color="gray" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Flex>
    </label>
  );
};
