import { IRequest, Router, json, withContent } from 'itty-router';

// now let's create a router (note the lack of "new")
const router = Router();

const withFormData = async (req: IRequest) => {};
// GET collection index
router.get('/api/todos', () => new Response('Todos Index!'));

// GET item
router.get('/api/todos/:id', ({ params }) => new Response(`Todo #${params.id}`));

// POST to the collection (we'll use async here)
router.post('/api/todos', async (req) => {
	const formData = await req.formData();
	const file = formData.get('file') as unknown as File;
	const title = formData.get('title') as string;
	
	
	return {
		file: file.name,
		title
	};
});

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
