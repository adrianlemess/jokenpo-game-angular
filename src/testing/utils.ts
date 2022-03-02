import { ActivatedRoute } from '@angular/router';

export const getMockProviderActivatedRoute = (obj: object) => {
    return {
        provide: ActivatedRoute,
        useValue: {
            snapshot: {
                paramMap: {
                    get: () => JSON.stringify(obj),
                },
            },
        },
    };
};
