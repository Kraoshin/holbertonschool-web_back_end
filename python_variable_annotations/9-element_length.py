#!/usr/bin/env python3
""" Module for element_length function """
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples, each containing an
    element from the input iterable and its length.

    Args:
    lst (Iterable[Sequence])

    Returns:
    List[Tuple[Sequence, int]]
    """
    return [(i, len(i)) for i in lst]
