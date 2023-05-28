import { rest } from 'msw';

export const handlers = [
	rest.post('/api/appointments/get-all', (req, res, ctx) => {
		return res(ctx.status(200));
	}),
	rest.get('/api/doctors', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json([]));
	})
];
