export interface CandidateDetail {
    name: string | undefined;
    city: string | undefined;
    phone: string | undefined;
}


export interface BoardList {
    name: string;
    candidates: CandidateDetail[];
}