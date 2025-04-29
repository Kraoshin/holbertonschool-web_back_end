#!/usr/bin/env python3
""" Simple Pagination """

from typing import Tuple
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Get the page with the pagination"""
        assert type(page_size) is int and type(page) is int
        assert page > 0
        assert page_size > 0
        dataset = self.dataset()
        start_index, end_index = index_range(page, page_size)
        if start_index >= len(dataset):
            return []
        return dataset[start_index:end_index]


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end
    for a given page and page size.
    """
    return ((page * page_size - page_size), page * page_size)
