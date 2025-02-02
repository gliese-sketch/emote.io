import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { useState } from "react";

function Emote() {
  const [emoji, setEmoji] = useState("😏");

  return (
    <main className="min-h-screen flex items-center justify-center gap-4 flex-col">
      <h1 className="text-3xl lowercase font-bold">emote.io</h1>
      <Card className="text-6xl p-3">{emoji}</Card>
      <ShowEmotes setEmoji={setEmoji} />
    </main>
  );
}

function ShowEmotes({ setEmoji }) {
  const emojis = ["😀", "😁", "🤣", "😂", "😎", "🙄"];

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {emojis.map((emoji) => (
        <Button key={emoji} variant="flat" onPress={() => setEmoji(emoji)}>
          <p className="text-xl">{emoji}</p>
        </Button>
      ))}
    </div>
  );
}

export default Emote;
