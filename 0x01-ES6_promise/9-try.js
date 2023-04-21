export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push({ status: 'fulfilled', value: result });
  } catch (e) {
    queue.push({ status: 'rejected', reason: String(e) });
  } finally {
    queue.push({ status: 'finished' });
  }
  return queue;
}
