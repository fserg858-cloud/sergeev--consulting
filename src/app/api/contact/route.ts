import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, telegram, business } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: 'Missing API Keys' }, { status: 500 });
    }

    const message = `🔥 НОВАЯ ЗАЯВКА НА РАЗБОР\n\n👤 Имя: ${name}\n✈️ Telegram: ${telegram}\n💼 Бизнес: ${business}`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    if (!response.ok) throw new Error('Telegram error');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
