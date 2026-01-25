export const generateScenario = async (apiKey) => {
  const systemPrompt = `Bạn là một AI hỗ trợ nội dung cho website học tập về các cặp phạm trù triết học Mác – Lênin.

Bối cảnh:
Website đã có giao diện và logic xử lý.
Nhiệm vụ của bạn là sinh dữ liệu để hiển thị cho người học.

Nhiệm vụ:
Tạo 1 câu hỏi trắc nghiệm dựa trên tình huống thực tế liên quan đến một cặp phạm trù triết học.

Danh sách cặp phạm trù:
- Cái chung – Cái riêng (và cái đơn nhất)
- Nguyên nhân – Kết quả
- Tất nhiên – Ngẫu nhiên
- Nội dung – Hình thức
- Bản chất – Hiện tượng
- Khả năng – Hiện thực

Yêu cầu:
- Chỉ chọn 1 cặp phạm trù
- Tình huống ngắn gọn, đời sống, dễ hiểu
- Không lặp lại nội dung trước đó
- Phù hợp sinh viên đại học

Đầu ra:
- 4 lựa chọn
- 1 đáp án đúng
- Có giải thích ngắn gọn, dễ nhớ

⚠️ QUAN TRỌNG:
Chỉ trả về JSON thuần, không markdown, không giải thích thêm.

Định dạng JSON:
{
  "pair": "",
  "scenario": "",
  "question": "",
  "options": [],
  "correctAnswer": "",
  "explanation": ""
}`;

  try {
    const requestBody = {
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: 'Vui lòng tạo 1 tình huống và câu hỏi trắc nghiệm mới về các cặp phạm trù triết học.',
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }

    console.log('🚀 Sending request to Groq:', requestBody.model)

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📊 Response status:', response.status)

    if (!response.ok) {
      const error = await response.json()
      console.error('❌ API Error:', error)
      throw new Error(error.error?.message || `HTTP ${response.status}: Lỗi API Groq`)
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse JSON từ response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Không thể parse JSON từ response');
    }

    const scenario = JSON.parse(jsonMatch[0]);
    return scenario;
  } catch (error) {
    console.error('Lỗi khi gọi Groq API:', error);
    throw error;
  }
};
