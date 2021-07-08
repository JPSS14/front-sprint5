export interface SpinnerInterface {
    addRequest: () => number;
    removeRequest: () => number;
    isLoading: () => boolean;
}