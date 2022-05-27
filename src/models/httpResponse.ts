export interface PagedData<T> {
	data: {
		offset?: number;
		limit?: number;
		total?: number;
		count?: number;
		results: T[];
	}
}

export interface HttpResponse<T> {
	code?: number;
	status?: string;
	data: PagedData<T>;
}
