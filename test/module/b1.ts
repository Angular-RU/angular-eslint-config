import { Any } from '../../typings';

export class B1 {
    public hello(a: number): number;

    /**
     * @deprecated
     */
    public hello(a: string): string;

    public hello(a: Any): Any {
        return a;
    }
}
