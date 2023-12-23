import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export async function GET() {
  let response, body;
  return new Response(JSON.stringify({ date: dayjs().utc().format('YYYY-MM-DD'), format: 'YYYY-MM-DD' }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
