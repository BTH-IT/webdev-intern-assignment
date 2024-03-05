import axiosClient from './axiosService';
import { IShoe } from '../types/shoe';

const shoeService = {
  async getShoe(shoeId: number): Promise<IShoe> {
    const url = `/shoes/${shoeId}`;
    return await axiosClient.get(url);
  },
  getAll() {
    return axiosClient.get('/shoes', {});
  },
  createshoe(data: IShoe) {
    return axiosClient.post('/shoes', data);
  },
  updateshoe(shoeId: number, data: IShoe) {
    return axiosClient.put(`/shoes/${shoeId}`, data);
  },
  deleteshoe(shoeId: number) {
    const url = `/shoes/${shoeId}`;
    return axiosClient.delete(url);
  },
};

export default shoeService;
